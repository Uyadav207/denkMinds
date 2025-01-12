import React from 'react'

import Image from 'next/image'

const Mission = () => {
  return (
			<section
				id="mission"
				className=" w-full flex justify-center items-center min-h-screen"
			>
				<div className="relative overflow-hidden  flex justify-center items-center min-h-[50vh] bg-background-home w-full text-white px-6  ">
					<div className="absolute left-[50px] sm:left-[100px] top-5 md:top-10 md:left-[200px] z-10">
						<Image
							src={"/quotes.svg"}
							alt="quote"
							className="h-20 w-20 md:h-40 md:w-40"
							width={64}
							height={64}
						/>
					</div>

					<div className="relative flex w-full xl:w-3/4 space-x-4 items-start justify-start z-10">
						<div className="flex flex-col w-full xl:flex-row  items-center xl:space-x-20 space-y-4">
							<h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white xl:leading-none">
								Our Mission
							</h2>
							<div className="w-full text-justify">
								<blockquote className="italic w-full font-normal text-lg xl:text-lg text-gray-200 leading-relaxed">
									&ldquo;To revolutionize security by leveraging the power of AI
									to outsmart hackers and actively counter threats, ensuring a
									safer cyber world for everyone.&rdquo;
								</blockquote>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
}

export default Mission
