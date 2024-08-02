TARGET_DIR=./skeleton-app
BUILD_DIR=$(TARGET_DIR)/build
DIST_DIR=./dist

.PHONY: dist build-assets clean-dist move-dist stage-dist

build-assets:
	(cd $(TARGET_DIR) && npm run build)

clean-dist:
	rm -rf $(DIST_DIR)

move-dist:
	mkdir -p $(DIST_DIR)
	cp -r $(BUILD_DIR)/* $(DIST_DIR)

stage-dist:
	git add $(DIST_DIR)/*

dist:
	make build-assets
	make clean-dist
	make move-dist
	make stage-dist
