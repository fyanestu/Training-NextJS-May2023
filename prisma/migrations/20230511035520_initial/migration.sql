-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(100) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deletedAt` DATETIME(3) NULL,
    `salt` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    INDEX `index_user_id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Posts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `slug` VARCHAR(255) NOT NULL,
    `content` LONGTEXT NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deletedAt` DATETIME(3) NULL,

    INDEX `index_post_id`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Posts_author` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `postsId` INTEGER NOT NULL,
    `authorId` INTEGER NOT NULL,

    INDEX `index_post_author_id`(`id`),
    INDEX `Posts_author_authorId_fkey`(`authorId`),
    INDEX `Posts_author_postsId_fkey`(`postsId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Posts_seo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `postsId` INTEGER NOT NULL,
    `hashId` VARCHAR(10) NULL,
    `seo_slug` VARCHAR(255) NOT NULL,
    `original_url` VARCHAR(255) NULL,
    `canonical_url` VARCHAR(255) NULL,
    `seo_keyword` VARCHAR(255) NULL,
    `seo_title` VARCHAR(255) NULL,
    `seo_summary` VARCHAR(255) NULL,
    `seo_img_alt` VARCHAR(255) NULL,
    `seo_content` VARCHAR(255) NULL,
    `seo_status` INTEGER NOT NULL DEFAULT 0,

    INDEX `index_posts_seo_id`(`id`),
    INDEX `Posts_seo_postsId_fkey`(`postsId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `description` LONGTEXT NULL,
    `price` BIGINT NULL,
    `createdAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productId` INTEGER NOT NULL,
    `fieldname` VARCHAR(10) NULL,
    `originalname` VARCHAR(191) NULL,
    `encoding` VARCHAR(191) NULL,
    `mimetype` VARCHAR(191) NULL,
    `destination` VARCHAR(191) NULL,
    `filename` VARCHAR(191) NULL,
    `size` INTEGER NULL,
    `prefix` VARCHAR(191) NULL,

    INDEX `index_product_image_id`(`id`),
    INDEX `product_image_productId_fkey`(`productId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `product_taxonomy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `productId` INTEGER NOT NULL,
    `taxonomyId` INTEGER NOT NULL,

    INDEX `product_taxonomy_productId_fkey`(`productId`),
    INDEX `product_taxonomy_taxonomyId_fkey`(`taxonomyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `taxonomy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `parentId` INTEGER NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updatedAt` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `deletedAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Posts_author` ADD CONSTRAINT `Posts_author_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Posts_author` ADD CONSTRAINT `Posts_author_postsId_fkey` FOREIGN KEY (`postsId`) REFERENCES `Posts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Posts_seo` ADD CONSTRAINT `Posts_seo_postsId_fkey` FOREIGN KEY (`postsId`) REFERENCES `Posts`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_image` ADD CONSTRAINT `product_image_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_taxonomy` ADD CONSTRAINT `product_taxonomy_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product_taxonomy` ADD CONSTRAINT `product_taxonomy_taxonomyId_fkey` FOREIGN KEY (`taxonomyId`) REFERENCES `taxonomy`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
