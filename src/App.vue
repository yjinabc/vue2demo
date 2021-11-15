<template>
    <div id="app">
        <el-row class="menu">
            <el-col :span="4">
                <div>
                    <el-menu router>
                        <el-menu-item index="/dashboard">
                            <span>dashboard</span>
                        </el-menu-item>
    
                    </el-menu>
                </div>
            </el-col>
            <el-col :span="4">
                <div>
                    <el-menu router>
                        <el-menu-item index="/timestat">
                            <span>time statistic</span>
                        </el-menu-item>
                    </el-menu>
                </div>
            </el-col>
        </el-row>
        <router-view />
    </div>
</template>

<script>
export default {
    name: "App",
    data() {

    },
    methods: {

    },
};
</script>

<style>
#app {
    margin-top: 60px;
}
</style>
