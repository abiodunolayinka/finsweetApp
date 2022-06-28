import React from "react";
import man from "../../images/Main image.png";
import man1 from "../../images/man-wearing-blue-crew-neck-t-shirt-2379005.png";
import man2 from "../../images/man-in-brown-button-up-shirt-3785079.png";
import woman1 from "../../images/woman-wearing-eyeglasses-1878522.png";

const BlogPost = () => {
  return (
    <div class="sm:mx-4 w-11/12 m-auto">
      <div class="max-w-11/12">
        <div class="m-auto w-7/12 sm:m-auto items-center  justify-center py-10 ">
          <h1 class="text-3xl sm:text-4xl  font-bold mb-2 text-center ">
            New invoicing features to help you get paid faster
          </h1>
          <p class="text-center font-semibold">
            Luke Matthews l November 8, 2021
          </p>
        </div>
      </div>
      <div>
        <img class="w-2xl sm:m-auto" src={man} alt="gort" />
      </div>
      <div class="m-auto sm:w-7/12 sm:m-auto   justify-center py-10 ">
        <h1 class="text-3xl sm:text-5xl font-bold mb-2 text-lg text-center ">
          New invoicing features to help you get paid faster
        </h1>
        <p class="font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
          auctor dictum eget a elit. Pellentesque varius diam risus, ut
          condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
          cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
          interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
          Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam
          ornare nibh vel dui egestas, eu posuere metus convallis.
        </p>
        <p class="font-semibold">
          Ut non urna a odio condimentum dictum. Proin egestas erat a orci
          ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
          justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi
          velit, ultricies eget enim vel, venenatis mollis ante. Maecenas
          sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
          rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui.
          Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque
          egestas, non condimentum mi bibendum. Sed est eros, molestie
          consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet
          massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
          tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris
          at nisi sed elit gravida malesuada.
        </p>
      </div>
      <div class="m-auto sm:w-7/12 sm:m-auto items-center  justify-center py-10 ">
        <h1 class="text-3xl sm:text-5xl font-bold mb-2 text-lg text-center ">
          New invoicing features to help you get paid faster
        </h1>
        <p class=" font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          dignissim dolor et dui bibendum aliquam. Mauris a quam sit amet dui
          auctor dictum eget a elit. Pellentesque varius diam risus, ut
          condimentum lorem volutpat vel. Nam vel orci pharetra eros pulvinar
          cursus nec quis tellus. Quisque feugiat tortor lectus, pretium
          interdum justo tincidunt a. Donec at congue lectus. Nulla facilisi.
          Phasellus consectetur sapien accumsan lectus tincidunt placerat. Etiam
          ornare nibh vel dui egestas, eu posuere metus convallis.
        </p>
        <div>
          <div class="w-1 h-4"></div>
          <p>Ut non urna a odio condimentum dictum. Proin egestas erat a orci ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi velit, ultricies eget enim vel, venenatis mollis ante.</p>
        </div>
        <p class=" font-semibold">
          Ut non urna a odio condimentum dictum. Proin egestas erat a orci
          ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
          justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi
          velit, ultricies eget enim vel, venenatis mollis ante. Maecenas
          sodales tristique quam. Suspendisse fringilla massa vel dolor ornare
          rhoncus. Nullam ut orci mattis leo varius laoreet sed mollis dui.
          Aenean placerat nec enim ut finibus. Maecenas suscipit nibh eu neque
          egestas, non condimentum mi bibendum. Sed est eros, molestie
          consectetur auctor non, lobortis quis tortor. Nam cursus imperdiet
          massa volutpat hendrerit. Sed suscipit ligula iaculis lorem sagittis
          tincidunt. Etiam pellentesque metus vel enim iaculis aliquam. Mauris
          at nisi sed elit gravida malesuada.
        </p>
      </div>
      <div class="sm:grid grid-cols-3 w-9/12 m-auto gap-4">
      <div>
          <img src={man1} alt="gort" />
          <div class="w-full">
            <h3 class="font-bold">
              7 Automation use cases that foster excellent CX
            </h3>
            <p class="font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
            <p>Luke Matthews l November 8, 2021</p>
          </div>
        </div>
        <div>
          <img src={man2} alt="gort" />
          <div class="w-full">
            <h3 class="font-bold">
              Managing Rails application secrets with encrypted credentials
            </h3>
            <p class="font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>

            <p>Luke Matthews l November 8, 2021</p>
          </div>
        </div>
        <div>
          <img src={woman1} alt="gort" />
          <div class="w-full">
            <h3 class="font-bold">
              Account-based marketing: Data-driven selection for ABM success
            </h3>
            <p class="font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>

            <p>Luke Matthews l November 8, 2021</p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default BlogPost;
