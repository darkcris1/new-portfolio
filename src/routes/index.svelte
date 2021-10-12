<script lang="ts">
    import Svg from "../components/Svg.svelte";
    import { flip } from "svelte/animate";

    import PageHeader from "../components/PageHeader.svelte";
    import Skillbars from "../components/Skillbars.svelte";
    import { WORK_CONFIGS, SERVICES_CONFIG } from "../common/config"
import { tick } from "svelte";

    let services = SERVICES_CONFIG;
    let configs = WORK_CONFIGS;
    let seviceHeight;
    let serviceEl: HTMLElement;
    function toggle(){
        configs = configs.reverse()
    }

    async function changeService(type){
      services = services.map(s=>{
        if (s.type === type) {
          s.active = true
        } else{
          s.active = false
        }
        return s
      })
      await tick();

      seviceHeight = getComputedStyle(serviceEl).height
    }
    
</script>


<PageHeader
    title="Hey! I am Cris."
    description="I create custom websites to help businesses to their standards"
>
    <div class="mt-5">
        <button class="btn btn-sm btn-primary mr-2">View CV</button>
        <button class="btn btn-sm btn-primary">Get In Touch</button>
    </div>
</PageHeader>



<section class="py-6">
    <div class="container">
        <h2 on:click={toggle} class="cursor-pointer text-4xl text-center text-primary">Skills</h2>
        <div class="grid gap-x-16 grid-cols-1 md:grid-cols-2 px-5 w-full mt-10">
            {#each configs as c (c)}
                <div animate:flip>
                    <Skillbars {...c} />
                </div>
            {/each}
        </div>
    </div>
</section>

<div style={`height: ${seviceHeight}; overflow: hidden`} class="transition-all duration-300">
  <section 
    bind:this={serviceEl} 
    class="py-14 px-5 bg-neutral ">
    <div class="container">
        <div class="grid md:grid-cols-2 grid-cols-1 gap-y-5 place-items-center">
            <div class="text-white">
                <h2 class="text-center text-3xl">Services</h2>
                <ul class="mt-5">
                  {#each services as sConfig }
                    <li on:click={()=>changeService(sConfig.type)} class="text-lg py-2 cursor-pointer hover:opacity-80">
                      <i class="far text-primary fa-check-circle mr-2"></i>{sConfig.text}
                    </li>
                  {/each}
            </div>


            <div>
              {#each services as sConfig }
                  {#if sConfig.active}
                    <Svg type={sConfig.type}/>
                  {/if}
              {/each}
            </div>
        </div>
    </div>
  </section>
</div>



<section class="py-14 px-5">
    <div class="container">
        <h2 class="text-5xl text-primary text-center">Works</h2>

        <div class="mx-auto card w-10/12 lg:card-side bordered shadow-xl mt-16">
            <figure>
              <img alt="sample" src="https://picsum.photos/id/1005/400/250">
            </figure> 
            <div class="card-body">
              <a href="https://github.com/darkcris1/" class="card-title text-2xl">github/darkcris1
              </a> 
              <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
              <div class="card-actions flex justify-between">
                <div data-tip="Location" class="tooltip">
                    <i class="fas fa-location"></i> Philippines
                </div>
                <div data-tip="Gists" class="tooltip">
                    <i class="fa fa-code"></i> Gists
                </div>
                <div data-tip="Repositories" class="tooltip">
                    <i class="fa fa-book"></i> Repositories
                </div>
              </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-5 mt-20 relative">
            <div class="card bordered shadow-lg">
                <figure>
                  <img src="https://picsum.photos/id/1005/400/250" alt="card">
                </figure> 
                <div class="card-body">
                  <h2 class="card-title">Tappi
                    <div class="badge mx-2 badge-info">NEW</div>
                  </h2> 
                  <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
                  <div class="justify-end card-actions">
                    <button class="btn btn-info">More info</button>
                  </div>
                </div>
            </div> 
            <div class="card bordered shadow-lg">
                <figure>
                  <img src="https://picsum.photos/id/1005/400/250" alt="card">
                </figure> 
                <div class="card-body">
                  <h2 class="card-title">Tappi
                    <div class="badge mx-2 badge-accent">NEW</div>
                  </h2> 
                  <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
                  <div class="justify-end card-actions">
                    <button class="btn btn-accent">More info</button>
                  </div>
                </div>
            </div> 
            <div class="card bordered shadow-lg">
                <figure>
                  <img src="https://picsum.photos/id/1005/400/250" alt="card">
                </figure> 
                <div class="card-body">
                  <h2 class="card-title">Tappi
                    <div class="badge mx-2 badge-primary">NEW</div>
                  </h2> 
                  <p>Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit sit necessitatibus veritatis sed molestiae voluptates incidunt iure sapiente.</p> 
                  <div class="justify-end card-actions">
                    <button class="btn btn-primary">More info</button>
                  </div>
                </div>
            </div> 
        </div>
    </div>
  
</section>



<section class="py-14 px-5 bg-gradient-to-tr from-primary-focus to-accent text-center">
    <div class="container">
        <h2 class="text-base-100 text-3xl md:text-5xl font-bold">Want to see more about my projects ?</h2>
        <a class="btn btn-info btn-lg mt-10" href="https://github.com/darkcris1">Visit Github</a>
    </div>
</section>

<section class="py-14 text-center">
    <div class="container grid grid-cols-1 md:grid-cols-2 place-items-center gap-x-10">
        <div class="">
            <h2 class="font-bold text-xl">I am happy to hear if you are interested of my works</h2>
            <p class="my-10">You can contact me anytime via this form, make sure your email is correct so I can get in touch to you immediately after I received the mails.</p>

            <p class="font-semibold">You can also contact me via the following:</p>
            <div class="text-2xl mt-4">
                <i class="fab fa-facebook text-blue-500"></i>
                <i class="fab fa-google text-green-500"></i>
            </div>
        </div>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <form action="" class="w-full py-5 flex flex-col gap-y-5">
            <h2 class="text-3xl mb-5">Contact</h2>
            <div class="form-control">
              <label class="label">
                  <span class="label-text">Name</span>
                </label> 
                <input type="text" placeholder="username" class="input input-primary input-bordered">
            </div> 
            <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label> 
                <input type="text" placeholder="username" class="input input-primary input-bordered">
            </div> 
            <div class="form-control">
                <label class="label">
                  <span class="label-text">Messages</span>
                </label> 
                <textarea rows="7"  class="textarea textarea-bordered border-primary" placeholder="Messages..."></textarea>
            </div>
            <button class="btn btn-primary self-center mt-5 w-52 max-w-full" type="submit">
              Send <i class="ml-2 fas fa-location-arrow rotate-45"></i>
            </button>
        </form>
    </div>
</section>