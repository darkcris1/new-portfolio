<section class="py-14 px-5 text-center">
    <div class="container grid grid-cols-1 md:grid-cols-2 rounded-lg">
        <div class="flex items-center justify-center flex-col p-5">
            <h2 class="font-bold text-xl">I am happy to hear if you are interested of my works</h2>
            <p class="my-10">You can contact me anytime via this form, make sure your email is correct so I can get in touch to you immediately after I received the mails.</p>

            <p class="font-semibold">You can also contact me via the following:</p>
            <div class="text-2xl mt-4">
              <a href="https://facebook.com/crisjunjun123" class="btn btn-ghost btn-circle btn-lg text-2xl">
                <i class="fab fa-facebook text-blue-500"></i>
              </a>
              <a href="mailto:sircnujnuj@gmail.com"  class="btn btn-ghost btn-circle btn-lg text-2xl" >
                <i class="fab fa-google text-green-500"></i>
              </a>
            </div>
        </div>
        <!-- svelte-ignore a11y-label-has-associated-control -->
        <form novalidate action="" class="w-full p-5 flex flex-col gap-y-5">
            <h2 class="text-3xl mb-5 ">Contact</h2>
            <div class="form-control">
              <label class="label">
                  <span class="label-text">Name</span>
                </label> 
                <input type="text" placeholder="Name" class="input input-primary input-bordered">
            </div> 
            <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label> 
                <input type="email" placeholder="Email" class="input input-primary input-bordered">
            </div> 
            <div class="form-control">
                <label class="label">
                  <span class="label-text">Messages</span>
                </label> 
                <textarea rows="7"  class="resize-none textarea textarea-bordered border-primary" placeholder="Messages..."></textarea>
            </div>
            <button class="btn btn-primary self-center mt-5 w-52 max-w-full" type="submit">
              Send <i class="ml-2 fas fa-location-arrow rotate-45"></i>
            </button>
        </form>
    </div>
</section>