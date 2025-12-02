GIT_USER_NAME = $(shell git config user.name)
GIT_USER_EMAIL = $(shell git config user.email)
docker_image_env = ../dev/dockers/js/env.sh

.PHONY: dev
dev:
	rvq_js_container_name=rvq_vuetifyx_pro-tiptap_dev $(docker_image_env) @dev

.PHONY: install
install:
	echo 'pnpm add @vueuse/components' | $(docker_image_env) @exec -

.PHONY: build
build:
	echo 'pnpm run build:lib' | $(docker_image_env) @build_cmd

#commit:
#	echo 'git commit --no-verify ...' | $(docker_image_env) @exec -