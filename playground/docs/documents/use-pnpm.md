- 硬链接(hard link)，如下图，当文件A和文件B都指向磁盘中的某一段数据的存储空间地址，则此时两个文件之间则建立硬链接关系

![硬链接](../imgs/use-pnpm/硬链接.png)

- 软链接(symbol link)，如下图，当文件A指向磁盘中的某一段数据的存储空间地址，文件B又指向文件A，此时两个文件之间则建立软链接关系

![软链接](../imgs/use-pnpm/软链接.png)