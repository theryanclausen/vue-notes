<template>
    <div><h5>{{note.title}}</h5><p>{{note.textBody}}</p> </div>
</template>

<script>
export default {
    name:'Note',
    props:["note"]
}
</script>

<style lang="less" scoped>
    div{
        color:#35495e;
        background: #b2e4ce;
        border:3px solid #35495e;
    }
</style>
