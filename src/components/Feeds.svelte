<div class="feeds">
  <h2 v-if="feeds.length !== 0">Posts</h2>
  {#each feeds as feed, i}
    <Feed feed={feed} index={i} />
  {/each}
</div>

<script lang="typescript">
import Feed from './Feed.svelte';
export let feeds: FeedType[]

</script>

<style>
.feeds {
  margin-top: 5px;
}
</style>
