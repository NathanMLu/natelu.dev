<script lang="ts">
    import {quiz} from "$lib/models/stores";
    import {QUIZ_DESCRIPTION} from "$lib/models/quiz";
    import Button from "$lib/components/Button.svelte";

    let selectedOption = "";

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

    const submitQuiz = () => {
        // console.log(selectedOption)
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

                <div class="flex flex-col lg:mx-8 md:mx-4 mx-2 mt-10 justify-items-center items-center">
                    <h2 class="text-dark text-2xl font-bold text-center lg:w-1/2 md:w-2/3 w-3/4 mb-4">
                        {$quiz.question}
                    </h2>

                    {#each $quiz.options as option}
                        <label class="bg-white text-black rounded-lg px-4 py-2 my-2 lg:w-1/2 md:w-2/3 w-3/4 drop-shadow-lg flex justify-items-start items-center gap-4 cursor-pointer {selectedOption === option.text ? 'bg-wave-two' : ''}">
                            <input type="radio" class="form-radio h-5 w-5 text-dark cursor-pointer" name="radio"
                                   value={option.text} id={option.text} bind:group={selectedOption}>
                            <span class="text-dark font-semibold text-lg cursor-pointer">
                                {option.text}
                            </span>
                        </label>
                    {/each}

                    <div class="lg:w-1/2 md:w-2/3 w-3/4 ">
                        <Button color="primary" customClass="self-start mt-6" on:click={submitQuiz}>
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}

