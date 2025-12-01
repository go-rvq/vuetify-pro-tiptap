#!/usr/bin/env bash
set -ex
[ -e ./.git ] && husky
pnpm build:lib