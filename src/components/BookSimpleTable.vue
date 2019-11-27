<!--Simple Table-->
<template>
    <v-simple-table>
        <template v-slot:default>
            <thead>
                <tr>
                    <th>编号</th>
                    <th>书名</th>
                    <th>定价</th>
                    <th>简介</th>
                    <th>单选标签</th>
                    <th>多选标签</th>
                    <th>单选状态</th>
                    <th>多选状态</th>
                    <th>单选颜色</th>
                    <th>多选颜色</th>
                    <th>单选分类</th>
                    <th>多选分类</th>
                    <th>单选形态</th>
                    <th>多选形态</th>
                    <th>创建时间</th>
                    <th>最后更新时间</th>
                    <th>查看</th>
                    <th>编辑</th>
                    <th>删除</th>
                </tr>
            </thead>
            <tbody v-if="items != null && items.length > 0">
                <tr v-for="item in items" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.price}}</td>
                    <td>{{item.brief}}</td>
                    <td>{{item.singleTag.tagName}}</td>
                    <td><span v-for="v in item.multiTag" :key="v.tagId">{{v.tagName}};</span></td>
                    <td>{{item.singleStatus.statusName}}</td>
                    <td><span v-for="v in item.multiStatus" :key="v.statusId">{{v.statusName}};</span></td>
                    <td>{{item.singleColor.colorName}}</td>
                    <td><span v-for="v in item.multiColor" :key="v.colorId">{{v.colorName}};</span></td>
                    <td>{{item.singleCategory.categoryName}}</td>
                    <td><span v-for="v in item.multiCategory" :key="v.categoryId">{{v.categoryName}};</span></td>
                    <td>{{item.singlePattern.patternName}}</td>
                    <td><span v-for="v in item.multiPattern" :key="v.patternId">{{v.patternName}};</span></td>
                    <td>{{item.createTime}}</td>
                    <td>{{item.lastUpdateTime}}</td>
                    <td><a ng-click="openItem(item.id)">查看</a></td>
                    <td><a ng-click="openUpdate(item.id)">编辑</a></td>
                    <td><a ng-click="disable(item.id)" href>删除</a></td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
</template>

<script>
    export default {
        data: () => ({
            items: null
        }),
        methods: {

            load_items: function () {

                this.bookManageService.book_items({ pageIndex: 1 }).then(response => {
                    this.items = response.data.items;
                });
            }
        },
        mounted: function () {

            this.load_items();
        }
    }
</script>