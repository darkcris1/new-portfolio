<script lang="ts">
    import Svg from "../components/Svg.svelte";
    import { flip } from "svelte/animate";
    import { fly } from "svelte/transition";
    import {send, receive} from "../common/crossafade"
    import PageHeader from "../components/PageHeader.svelte";
    import Skillbars from "../components/Skillbars.svelte";
    import { WORK_CONFIGS, SERVICES_CONFIG } from "../common/config"
    import { tick } from "svelte";
    import Modal from "../components/Modal.svelte";
    import { tweened } from "svelte/motion"
    let services = SERVICES_CONFIG;
    let configs = WORK_CONFIGS;
    let seviceHeight;
    let serviceEl: HTMLElement;
    let showCV = false;

    const height = tweened(0)
    function toggleShowCv(){
      showCV = !showCV;
    }
    function toggle(){
        configs = configs.reverse()
    }

    async function changeService(type,i){
      services = services.map(s=>{
        if (s.type === type) {
          s.active = true
        } else{
          s.active = false
        }
        return s
      })

      const s =  services.splice(i,1);   
      services.unshift(s[0])
      services = services;
      await tick();

      seviceHeight = getComputedStyle(serviceEl).height
    }
    
</script>


<PageHeader
    title="Hey! I am Cris."
    description="I create custom websites to help businesses to their standards"
>
    <div class="mt-5">
        {#if !showCV}
          <button in:send={{key: "btn2"}} out:receive={{key: "btn1"}} on:click={toggleShowCv} class="btn btn-sm btn-primary mr-2">View CV</button>
        {/if}
        <button class="btn btn-sm btn-primary">Get In Touch</button>
    </div>
</PageHeader>

<Modal show={showCV} toggler={toggleShowCv}>
  <div in:send={{key: "btn1"}} out:receive={{key: "btn2"}} class="shadow-md rounded-box overflow-hidden max-w-[100vw]" style="height: 90vh; width: 800px">
    <iframe 
    class="h-full w-full"
      title="My Resume" 
      src={`https://view.officeapps.live.com/op/embed.aspx?src=https://drive.google.com/u/0/uc?id=1GhRvrLb3uc1p6IWcZY-R1lUgGJaUQTfK&export=download` } frameborder="0"></iframe>
  </div>
</Modal>



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
                <h2 class="text-center text-3xl cursor-pointer">Services</h2>
                <ul class="mt-5">
                  {#each services as sConfig,i (sConfig)}
                    <li animate:flip on:click={()=>changeService(sConfig.type, i)} class="text-lg py-2 cursor-pointer hover:opacity-80">
                      <svg class="svg-inline--fa fa-check-circle fa-w-16 text-primary mr-2" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"></path></svg>{sConfig.text}
                    </li>
                  {/each}
            </div>


            <div>
              {#each services as sConfig (sConfig)}
                  {#if sConfig.active}
                    <div in:fly={{x: 100}}>
                      <Svg type={sConfig.type}/>
                    </div>
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

<section class="py-14 px-5 text-center">
    <div class="container grid grid-cols-1 md:grid-cols-2 glass">
        <div class="flex items-center justify-center flex-col">
            <h2 class="font-bold text-xl">I am happy to hear if you are interested of my works</h2>
            <p class="my-10">You can contact me anytime via this form, make sure your email is correct so I can get in touch to you immediately after I received the mails.</p>

            <p class="font-semibold">You can also contact me via the following:</p>
            <div class="text-2xl mt-4">
              <a href="https://facebook.com/crisjunjun123" class="btn btn-ghost btn-circle btn-lg">
                <i class="fab fa-facebook text-blue-500"></i>
              </a>
              <a class="btn btn-ghost btn-circle btn-lg" href="mailto:sircnujnuj@gmail.com">
                <i class="fab fa-google text-green-500"></i>
              </a>
            </div>
        </div>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <form action="" class="w-full p-5 flex flex-col gap-y-5">
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



<section class=" bg-neutral text-neutral-content">
  <footer class="container items-center p-4 footer">
    <div class="items-center grid-flow-col">
      <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" class="fill-current">
        <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
      </svg> 
      <p>Copyright © 2021 - All right reserved</p>
    </div> 
    <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a> 
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a> 
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current">
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  
  </footer>
</section>
