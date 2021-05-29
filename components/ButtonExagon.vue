<template>
    <div class="btn-exagon">
        <!-- right -->
        <svg v-if="icon === 'right'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.464 58.271" class="exagon"><g stroke-width="1" transform="translate(-1624 -187.923)"><path class="background exagon" d="M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z" transform="translate(1623.5 187.345)"></path><path class="foreground right" d="M0 0l7.432 5.674L14.864 0" transform="rotate(-90 935.432 -711.068)"></path></g></svg>

        <!-- left -->
        <svg v-else-if="icon === 'left'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.464 58.271" class="exagon left"><g stroke-width="1" transform="translate(-1624 -187.923)"><path class="background exagon" d="M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z" transform="translate(1623.5 187.345)"></path><path class="foreground left" d="M0 5.675L7.432 0l7.432 5.675" transform="rotate(-90 935.432 -711.068)"></path></g></svg>

        <!-- plus -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.464 58.271" class="exagon plus"><g stroke-width="1.5" transform="translate(-1624 -187.923)"><path class="background exagon" d="M50.464 43.992L25.732 58.271 1 43.992V15.434L25.732 1.155l24.732 14.279z" transform="translate(1623.5 187.345)"></path><g class="foreground plus" transform="translate(627 -5248.5)"><path d="M0 0v15" transform="translate(1022.5 5458.5)"></path><path d="M0 0v15" transform="rotate(90 -2218 3248)"></path></g></g></svg>
    </div>
</template>
<script>
export default {
    props: {
        icon: {
            type: String,
            default: () => 'plus'
        }
    }
}
</script>