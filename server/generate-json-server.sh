# https://github.com/creationix/nvm , https://www.sitepoint.com/quick-tip-multiple-versions-node-nvm/
set +ex                     # immediate script fail off, echo off
export NVM_DIR="$HOME/.nvm" # set local path to NVM
. ~/.nvm/nvm.sh             # add NVM into the Shell session
#nvm install v6.11.3        # first time only
nvm install
nvm use                     # choose current version
set -ex                     # immediate script fail on (default), echo on (default)

# 현재 디렉토리 저장
root_dir=$(pwd)

# 현재 디렉토리의 상대 경로를 이용해 projects 폴더 및 그 아래의 특정 폴더를 탐색하도록 수정
TARGET_FOLDERS=("mock/types/**/* mock/data/**/*")

for target in "${TARGET_FOLDERS[@]}"; do
    for th in $target; do
        # 파일인지 확인
        if [ -f "$th" ] && [[ "$th" == *.ts ]]; then
            echo "Running 'npx tsc $th'"
            # tsc 실행
            npx tsc $th
        # 디렉토리인지 확인
        elif [ -d "$th" ]; then
            cd "$th"
            for file in $th; do
                if [ -f "$file" ] && [[ "$th" == *.ts ]]; then
                    echo "Running 'npx tsc $file'"
                    # tsc 실행
                    npx tsc $file
                fi
            done
        # 파일이나 디렉토리가 아닌 경우
        else
            echo "$th is neither a file nor a directory."
        fi

        # 원래 상위 디렉토리로 돌아옴
        cd "$root_dir"
    done
done

npx tsc 'mock/generate.ts'

node server.js
