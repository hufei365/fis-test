<template>
    <div>
        <h3>{{name}}</h3>
        <p>{{desc}}</p>
    </div>
</template>

<script>
export default {
    props:{
        name:String,
        desc: String
    }
}
</script>

