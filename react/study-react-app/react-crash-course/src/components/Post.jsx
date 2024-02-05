const names = ['Tom', 'YoonKyum']
function Post() { // 컴포넌트 안에서 자바스크립트 코드로 모든 것을 할 수 있다. 리턴으로 jsx만 넘겨주면됨
    const chosenName = Math.random() > 0.5 ? names[0] : names[1]
    return (
        <div>
            <p>{chosenName}</p> {/* {} 로 감싸주면 변수 또는 함수 사용 가능 */}
            <p>React.js is Awesome!</p>
        </div>
    )
}

export default Post;