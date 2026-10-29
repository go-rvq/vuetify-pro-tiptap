GIT_USER_NAME = $(shell git config user.name)
GIT_USER_EMAIL = $(shell git config user.email)

# ../dev is a local repository of https://github.com/go-rvq/dev
docker_image_env = ../dev/dockers/js/env.sh

.PHONY: dev
dev:
	rvq_js_container_name=vuetify-pro-tiptap_dev $(docker_image_env) @dev

.PHONY: install
install:
	echo 'bun install' | $(docker_image_env) @exec -

.PHONY: build
build:
	echo 'bun run build:lib' | $(docker_image_env) @build_cmd

.PHONY: test
test:
	echo 'bun run lint:css && bun run lint:js && bun run check:types' | $(docker_image_env) @build_cmd

#.PHONY: commit
#commit:
#	echo 'git commit ...' | $(docker_image_env) @exec -