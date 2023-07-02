<script lang="ts">
    import {quiz} from "$lib/models/stores";
    import {QUIZ_DESCRIPTION} from "$lib/models/quiz";

    const closeQuiz = () => {
        quiz.update((q) => {
            q.show = false;
            return q;
        });
    };

    const handleBackgroundClick = (event) => {
        if (event.target === event.currentTarget) {
            closeQuiz();
        }
    };

</script>

{#if $quiz.show}
    <div class="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
         on:click={handleBackgroundClick}>
        <div class="bg-light-blue rounded-3xl lg:w-1/2 md:w-2/3 w-3/4 overflow-y-auto" id="shop-modal">
            <div class="lg:py-10 lg:px-14 md:py-8 md:px-10 py-6 px-8">
                <div class="flex justify-between items-center flex-row">
                    <h1 class="lg:text-4xl md:text-2xl text-2xl font-bold text-dark text-start">
                        Pop Quiz
                    </h1>
                    <iconify-icon icon="material-symbols:close"
                                  class="lg:text-4xl md:text-2xl text-xl text-dark cursor-pointer" width="40px"
                                  height="40px" on:click={closeQuiz}></iconify-icon>
                </div>
                <p class="text-black mt-2">{QUIZ_DESCRIPTION}</p>

                <div>

                </div>
        </div>
    </div>
{/if}

