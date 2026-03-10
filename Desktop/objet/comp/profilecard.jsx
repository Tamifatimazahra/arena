function profilecard(props) {
    return (
        <div>
            <p>name {props.name}</p>
            <p>age {props.age}</p>
            <p>city {<props className="city">}</p>
        </div>
    )
};
export default profilecard;