function CustomBtn(props) {
    console.log('props', props)
    return (
        <button style={{ width: 150, height: 50, background: 'lightblue' }}
            onClick = {() => alert('Mujse bat karna ki tumhari auqat nahi')}>
           {props.title || 'Contact me'}
        </button>
    )
}
export default CustomBtn