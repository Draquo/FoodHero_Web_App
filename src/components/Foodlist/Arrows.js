const Arrows = ({slider}) => {
    return (
        <div className='arrows shadow'>
            <div className="arrow" onClick={() => slider?.current.slickPrev()}>
                <span className="material-symbols-outlined">
                    arrow_back
                </span>
            </div>
            <div className="arrow" onClick={() => slider?.current.slickNext()}>
                <span className="material-symbols-outlined">
                    arrow_forward
                </span>
            </div>
        </div>
    )
}

export default Arrows;