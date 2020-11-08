#!/bin/bash
echo
if [ -e .commit ]
    then
    rm .commit
    npm run build
    git add docs/js/main.js
    git commit --amend -C HEAD --no-verify
fi
exit