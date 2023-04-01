-- DropForeignKey
ALTER TABLE `tasks` DROP FOREIGN KEY `tasks_category_id_fkey`;

-- AlterTable
ALTER TABLE `tasks` MODIFY `category_id` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `tasks` ADD CONSTRAINT `tasks_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
