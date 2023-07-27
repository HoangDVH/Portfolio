import React from "react";

export const About = () => {
  return (
    <div name='about' className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ex
          temporibus voluptatibus distinctio facilis? Ipsum inventore labore
          voluptatum velit optio ullam voluptatem, rerum dignissimos eligendi,
          similique, deserunt sint deleniti dolores excepturi tempora totam?
          Sapiente nam magnam, ipsum veniam cum iure, architecto, eaque odio
          similique temporibus quos quia earum dolores ullam?
        </p>

        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
          rerum architecto, dolorum itaque perferendis ipsam vero voluptate nemo
          repellendus a suscipit fugit iure temporibus accusamus doloribus
          quibusdam id! Quis aspernatur eum porro facere optio culpa fuga hic
          excepturi neque minima, odit atque enim perspiciatis, explicabo quam
          dolorem, consectetur placeat voluptatem.
        </p>
      </div>
    </div>
  );
};
