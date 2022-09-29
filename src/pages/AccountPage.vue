<template>
  <div class="about text-center">
    <ProfileDetail :profile="account" />
    <div class="container">
      <div class="row my-3">
        <div class="col-6 m-auto">
          <AccountForm class="elevation-2" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { AppState } from '../AppState';
import AccountForm from '../components/AccountForm.vue';
import ProfileDetail from '../components/ProfileDetail.vue';
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    };
  },
  components: { ProfileDetail, AccountForm }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
