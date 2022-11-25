import { useEffect, useState } from 'react';
import './style.css';
import vector from './Vector.png';


function AppClock(props) {
	let seconds = 0;
	const [count, setCount] = useState(0);
	const [minute, setMinute] = useState(0);
	const [prevSS, setPrevSS] = useState(0);
	const [prevSF, setPrevSF] = useState(0);
	const [prevMS, setPrevMS] = useState(0);
	const [prevMF, setPrevMF] = useState(0);
	let startTime = new Date();
	let inter;
	useEffect(() => {
		if (props.resetStatus) {
			setCount(0);
			setMinute(0);
			translateYSS(0);
			translateYSF(0);
			translateYMS(0);
			translateYMF(0);
		}
		if (props.status) {
			inter = setInterval(() => {
				if ((new Date().getSeconds()) > startTime.getSeconds()) {
					seconds = count + (new Date().getSeconds()) - startTime.getSeconds();
				}
				else {
					seconds = count + (new Date().getSeconds()) - startTime.getSeconds() + 60;
				}
				if (seconds === 59) {
					setMinute(minute + 1);
				}
				if (minute === 60) {
					setMinute(0);
				}
				if (seconds === 60) {
					seconds -= 60;
				}
				setCount(seconds);
				translateYSS(seconds % 10);
				translateYSF(seconds / 10);
				translateYMS(minute % 10);
				translateYMF(minute / 10);
			}, 1000);
			return () => { clearInterval(inter) };
		}
	}, [new Date()])
	let step = 0;
	function translateYSS(SS) {
		SS = Math.floor(SS);
		if (SS === 0 && prevSS === 9) {
			step = -54 * 10;
		}
		else {
			step = (-54) * SS;
		}
		const second__second = document.querySelector(".second__second");
		if (SS === 0 && prevSS === 9) {
			setTimeout(() => {
				second__second.style.transform = "translateY(0px)";
				second__second.style.transition = "all 0s linear";
			}, 980)
		}
		setPrevSS(SS);
		second__second.style.transform = "translateY(" + step + "px)";
		second__second.style.transition = "all 1s linear";
	}
	function translateYSF(SF) {
		SF = Math.floor(SF);
		if (SF === 0 && prevSF === 5) {
			step = -54 * 6;
		}
		else {
			step = (-54) * SF;
		}
		const second__first = document.querySelector(".second__first");
		if (SF === 0 && prevSF === 5) {
			setTimeout(() => {
				console.log(0);
				second__first.style.transform = "translateY(0px)";
				second__first.style.transition = "all 0s linear";
			}, 980)
		}
		setPrevSF(SF);
		second__first.style.transform = "translateY(" + step + "px)";
		second__first.style.transition = "all 1s linear";
	}
	function translateYMS(MS) {
		MS = Math.floor(MS);
		if (MS === 0 && prevMS === 9) {
			step = -54 * 10;
		}
		else {
			step = (-54) * MS;
		}
		const minute__second = document.querySelector(".minute__second");
		if (MS === 0 && prevMS === 9) {
			setTimeout(() => {
				minute__second.style.transform = "translateY(0px)";
				minute__second.style.transition = "all 0s linear";
			}, 980)
		}
		setPrevMS(MS);
		minute__second.style.transform = "translateY(" + step + "px)";
		minute__second.style.transition = "all 1s linear";
	}
	function translateYMF(MF) {
		MF = Math.floor(MF);
		if (MF === 0 && prevMF === 6) {
			step = -54 * 6;
		}
		else {
			step = (-54) * MF;
		}
		const minute__first = document.querySelector(".minute__first");
		if (MF === 0 && prevMF === 6) {
			setTimeout(() => {
				console.log(0);
				minute__first.style.transform = "translateY(0px)";
				minute__first.style.transition = "all 0s linear";
			}, 980)
		}
		setPrevMF(MF);
		minute__first.style.transform = "translateY(" + step + "px)";
		minute__first.style.transition = "all 1s linear";
	}

	return (
		<div className="clock">
			<div className="numbers">
				<div className="minute__first">
					<div>0</div>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div>0</div>
				</div>
				<div className="minute__second">
					<div>0</div>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div>6</div>
					<div>7</div>
					<div>8</div>
					<div>9</div>
					<div>0</div>
				</div>
				<div className="colon">:</div>
				<div className="second__first">
					<div>0</div>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div>0</div>
				</div>
				<div className="second__second">
					<div>0</div>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
					<div>6</div>
					<div>7</div>
					<div>8</div>
					<div>9</div>
					<div>0</div>
				</div>
			</div>
			<div className="again" onClick={props.again}>
				<img src={vector} alt="Again" />
			</div>

		</div>

	)
}
export default AppClock;


