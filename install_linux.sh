#!/bin/bash

set -eo pipefail

## Install Go
curl https://raw.githubusercontent.com/elimisteve/install-go/master/install-go.sh | bash

export GOROOT=~/go
export PATH=$PATH:$GOROOT/bin
export GOPATH=~/gocode
export PATH=$PATH:$GOPATH/bin

## Install git
sudo apt-get update
sudo apt-get install -y git

## Get `effective`
go get github.com/EffectiveAF/effective

## Get Node
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs

## Install create-react-app
sudo npm install -g create-react-app

## Install Postgres
sudo apt-get install -y postgresql postgresql-contrib

## Download and unpack PostgREST
cd $(go env GOPATH)/src/github.com/EffectiveAF/effective/db && \
    sudo -u postgres bash init_sql.sh && \
    wget https://github.com/begriffs/postgrest/releases/download/v0.4.3.0/postgrest-v0.4.3.0-ubuntu.tar.xz && \
    tar xvf postgrest-v0.4.3.0-ubuntu.tar.xz


echo '# Install complete!  Now run

source ~/.bashrc
cd $(go env GOPATH)/src/github.com/EffectiveAF/effective/db
./postgrest postgrest.conf

# in this terminal.  In a new terminal, run

cd $(go env GOPATH)/src/github.com/EffectiveAF/effective
npm install
npm run build
go build
./effective

# and Effective should be up and running on localhost:8082.
#
# See README.md for how to set up a production deployment that creates
# an auto-renewing HTTPS cert, uses secure headers, and more.'
