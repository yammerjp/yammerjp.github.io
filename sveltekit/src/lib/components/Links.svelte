<div class="links">
  {#each linkItems as linkItem}
    <a href="{linkItem.url}">
      <img
        class="links-icon {linkItem.id}"
        src="{linkItem.imgSrc}"
        alt="{linkItem.labelLineBreakable.join('')} icon"
      />
      <div class="title-wrapper">
        <span class="title">
          {#each linkItem.labelLineBreakable as line, i}{#if i !== 0}<wbr>{/if}{line}{/each}
        </span>
      </div>
    </a>
  {/each}
</div>

<script lang="ts">
  import linkItems from '$lib/dataSources/LinkItems'
</script>

<style>
.links {
  width: 100%;
  margin-top: 48px;
  text-align: center;
  display: inline-flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.links > a {
  display: block;
  flex-grow: 1;
  flex: 1;
  margin: 8px 0;
  padding: 0 8px;
}

.links-icon {
  width: min(64px, 12vw);
  height: min(64px, 12vw);
  border-radius: 8px;
}
.links-icon {
	box-shadow: 0 0 3px 0 rgba(0,0,0,.12), 0 2px 3px 0 rgba(0,0,0,.22);
	transition: .1s;
}
.links a:hover .links-icon{
	box-shadow: 0 15px 30px -5px rgba(0,0,0,.15), 0 0 5px rgba(0,0,0,.1);
	transform: translateY(-4px);
}
.links a:not(:hover) .title {
  display: none;
}
.title-wrapper {
  height: 16px;
}

@media screen and (max-width: 410px) {
  .links .title {
    display: none;
  }
  .title-wrapper {
    height: 0px;
  }
}
</style>
