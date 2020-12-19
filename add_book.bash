#!/bin/bash

set -eu

readonly isbn="$1"

readonly TITLE_TAG_NAME='dc:title'
readonly CREATOR_TAG_NAME='dc:creator'
readonly PUBLISHER_TAG_NAME='dc:publisher'

readonly NDL_URL="https://iss.ndl.go.jp/api/sru?operation=searchRetrieve&query=isbn=$isbn%20AND%20dpid=iss-ndl-opac%20&recordPacking=xml"

readonly TMP_XML='tmp.xml'
readonly TMP_JSON='tmp.json'
readonly BOOKS_JSON='src/data/books.json'

# xmlファイルからタグの中身を取得する
#
# $1: xmlファイル名
# $2: タグ名
# 出力: タグの中身
function get_text_in_xml_tag {
    local -r filename="$1"
    local -r tag_name="$2"
    echo $(grep $tag_name $filename | sed -e "s/.*<$tag_name>//" -e "s/<\/$tag_name>.*//")
}

# 国税庁APIから書籍データを取得する
curl $NDL_URL > "$TMP_XML"

# xmlファイルから必要な情報を抜き出す
readonly title=$(get_text_in_xml_tag "$TMP_XML" "$TITLE_TAG_NAME")
readonly creator=$(get_text_in_xml_tag "$TMP_XML" "$CREATOR_TAG_NAME")
readonly publisher=$(get_text_in_xml_tag "$TMP_XML" "$PUBLISHER_TAG_NAME")

# 追加する書籍情報をオブジェクトに格納する
readonly book_info="{ \"title\": \"$title\", \"isbn\": \"$isbn\", \"author\": \"$creator\", \"publisher\": \"$publisher\", \"price\": null }"

# books.jsonの配列に書籍情報を追加する
cat "$BOOKS_JSON" | jq ".|=.+[$book_info]" > "$TMP_JSON"
cat "$TMP_JSON" > "$BOOKS_JSON"

# スクリプト終了前に不要なファイルを消す
rm "$TMP_XML" "$TMP_JSON"
