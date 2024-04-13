import type { NextPage } from "next"; // 14에서는 안 써도 되지만, 사용해도 된다.

export default function Home() {
	return (
		<div className="bg-slate-400 py-20 px-20 grid gap-10 min-h-screen">
			{/* 
      2.5rem=40px, rem은 document폰트 사이즈를 기준으로 해서 브라우저에 따른 사이즈 변경되어 보여짐. 
      그래서 반응형 디자인에 아주 용이함

      flex-col space-y-5
      space는 요소 사이에 margin을 만들어줌. space-y-5를 주면 hidden되지 않은 모든 자식에 mt mb을 준다. help function이다
      즉, 요소 사이의 마진을 주면서 맨 위 요소에는 mt를 주지 않는다
      */}
			<div className="bg-white p-6 rounded-3xl shadow-xl">
				<span className="font-semibold text-3xl">Select Item</span>
				<div className="flex justify-between my-2">
					{/*flex: Flexbox 레이아웃을 활성화시켜 내부 요소들을 유연하게 배치하게 해준다. 
        justify-between: Flexbox 내의 요소들을 컨테이너의 양쪽 끝에 위치, 그 사이는 동일한 간격으로 채움*/}
					<span className="text-gray-500">Grey Chair</span>
					<span className="font-semibold">$19</span>
				</div>
				<div className="flex justify-between">
					<span className="text-gray-500">Grey Chair</span>
					<span className="font-semibold">$19</span>
				</div>
				<div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
					{/*border-t-2로 border-top-width 2px주고 border-dashed가 들어가야 점선이 보이게 된다.*/}
					<span>Total</span>
					<span className="font-semibold">$19</span>
				</div>
				<button className="flex justify-center mt-5 bg-blue-500 text-white p-2 text-center rounded-xl w-2/4 mx-auto hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:bg-red-500">
					Checkout
				</button>
				{/* w-2/4는 width:50%, mx-auto:x축으로 margin auto */}
			</div>

			<div className="bg-white overflow-hidden rounded-2xl shadow-xl">
				<div className="bg-blue-500 p-6 pb-14">
					<span className="text-white text-2xl">Profile</span>
				</div>
				<div className="rounded-3xl p-6 bg-white relative -top-5">
					{/* relative: 요소의 위치(position) 속성을 relative로 설정. 원래의 위치를 기준으로 조정이 되게 된다
        -top-5: 이 클래스는 요소를 수직 방향으로 원래 위치보다 위로 5단위 만큼 이동시키게 된다.
         */}

					<div className="flex relative -top-16 items-end justify-between">
						<div>
							<div className="flex flex-col items-center">
								<span className="text-sm text-gray-500">Orders</span>
								<span className="font-medium">340</span>
							</div>
						</div>
						<div className="h-24 w-24 bg-red-400 rounded-full" />
						<div>
							<div className="flex flex-col items-center">
								<span className="text-sm text-gray-500">Spent</span>
								<span className="font-medium">$2,310</span>
							</div>
						</div>
					</div>

					<div className="relative -mt-10 -mb-5 flex flex-col items-center">
						{/** relative후 여기서는 -top-16을 사용하지 않고, -mt-16을 사용했다.
						 * 이는 아래 부분이 빈 공백이 많이 생겨서 mt을 사용함으로써 공백을 없앤것이다. */}
						<span className="text-lg font-medium">David Kan</span>
						<span className="text-sm text-gray-500">New Your, USA</span>
					</div>
				</div>
			</div>

			<div className="bg-white p-6 rounded-3xl shadow-xl">
				<div className="flex mb-5 justify-between items-center">
					<span>⬅</span>
					<div className="space-x-3">
          {/* space-x-3는 x축 요소들 사이에 일정한 간격을 주기위해 사용. 좌우 마진을 계산해서 가져오는 help function임. */}  
						<span>⭐4.9</span>
						<span className="shadow-xl p-2 rounded-md">❤</span>
					</div>
				</div>
				<div className="bg-zinc-400 h-72 mb-5" />
				<div className="flex flex-col">
					<span className="font-medium text-xl">Swoon Lounge</span>
					<span className="text-xs text-gray-500">Chair</span>
					<div className="mt-3 mb-5 flex justify-between items-center">
						<div className="space-x-2">
							<button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
							<button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
							<button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
						</div>
            <div className="flex items-center space-x-4">
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">-</button>
              <span>1</span>
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">+</button>
              {/* aspect-square는 정사각형으로 만들어줌 */}
            </div>
					</div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 py-2 px-8 text-xs text-center text-white rounded-lg">Add to cart</button>
          </div>
				</div>
			</div>
		</div>
	);
}
