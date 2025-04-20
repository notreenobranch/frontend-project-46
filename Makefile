install:
	npm ci

lint:
	npx eslint .

test:
	npm test

test-coverage:
	npm test -- --coverage

publish:
	npm publish --dry-run

gendiff:
	node bin/gendiff.js