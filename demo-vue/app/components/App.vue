<template>
    <Page>
        <ActionBar title="Welcome to NativeScript-Vue!"/>
        <GridLayout columns="*" rows="auto, *">
            <Label class="message" :text="msg"/>
            <YoutubePlayer row="1" src="wH_0_pijbZY" apiKey="AIzaSyAUm14Rg9vH_Zv9X5BeWQ8UyMMypEq4htA"/>
        </GridLayout>
    </Page>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Hello World!'
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
