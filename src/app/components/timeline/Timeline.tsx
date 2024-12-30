import React from "react";

import "./Timeline.css";

const Timeline = () => {
	return (
		<>
		<h2 className="text-4xl md:text-5xl font-bold text-white text-center mt-10 mb-16 drop-shadow-md">
        Meet Our Team
      </h2>
			{/* Main timeline container */}
			<div
				id="timeline"
				className=" w-full flex flex-col justify-center items-center min-h-screen"
			>
				<div className="timeline-container">
					{/* Individual timeline point */}
					<div className="timeline-point">
						<p>1</p>
						<div className="popup">
							<div className="popup-number">1</div>
							<div className="popup-details">
								<div className="popup-title">Milestone 1</div>
								Lorem ipsum dolor sit amet conse adipisicing elit. Dicta vitae
								voluptates id hic recusandae omnis cupiditate odit quis,
								assumenda optio?
							</div>
						</div>
					</div>
					{/* Individual timeline point */}
					<div className="timeline-point">
						<p>2</p>
						<div className="popup">
							<div className="popup-number">2</div>
							<div className="popup-details">
								<div className="popup-title">Milestone 1</div>
								Lorem ipsum dolor sit amet conse adipisicing elit. Dicta vitae
								voluptates id hic recusandae omnis cupiditate odit quis,
								assumenda optio?
							</div>
						</div>
					</div>
					{/* Individual timeline point */}
					<div className="timeline-point">
						<p>3</p>
						<div className="popup">
							<div className="popup-number">3</div>
							<div className="popup-details">
								<div className="popup-title">Milestone 3</div>
								Lorem ipsum dolor sit amet conse adipisicing elit. Dicta vitae
								voluptates id hic recusandae omnis cupiditate odit quis,
								assumenda optio?
							</div>
						</div>
					</div>
					{/* Individual timeline point */}
					<div className="timeline-point">
						<p>4</p>
						<div className="popup">
							<div className="popup-number">4</div>
							<div className="popup-details">
								<div className="popup-title">Milestone 4</div>
								Lorem ipsum dolor sit amet conse adipisicing elit. Dicta vitae
								voluptates id hic recusandae omnis cupiditate odit quis,
								assumenda optio?
							</div>
						</div>
					</div>
					{/* Individual timeline point */}
					<div className="timeline-point">
						<p>5</p>
						<div className="popup">
							<div className="popup-number">5</div>
							<div className="popup-details">
								<div className="popup-title">Milestone 5</div>
								Lorem ipsum dolor sit amet conse adipisicing elit. Dicta vitae
								voluptates id hic recusandae omnis cupiditate odit quis,
								assumenda optio?
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Timeline;
