
  <template>
  <div class="mx5">
  <v-flex  xs8 offset-xs2>
    <iframe src="https://drive.google.com/embeddedfolderview?id=0B6U96PX1TeIxYzNhNThjMDQtM2M2ZC00ZjIxLTgwODktNWZiMTllZDRkZjg4#list" width="100%" height="700px" frameborder="0"></iframe>
  </v-flex>
</div>

</template>
<script>
export default {
  name: 'Documents',
  data() {
    return {
      mode: false
    }
  }
  // created() {
  //   // if (process.env.NODE_ENV === 'production') {
  //     this.mode = true
  //   // }
  // }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: 'Lucida Grande', Helvetica, Arial, Verdana, sans-serif;
  font-size: 14px;
}

#calendar {
  max-width: 1400px;
  margin: 50px auto;
}
</style>
