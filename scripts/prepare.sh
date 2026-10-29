#!/usr/bin/env bash
set -ex
[ -e ./.git ] && husky
bun run build:lib