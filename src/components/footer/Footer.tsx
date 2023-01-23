const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="Footer-wrapper flex-row" style={styles.wrapper}>
          <p>Created by Tornike Epitashvili</p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    margin: '3rem 0 1rem',
    color: 'rgb(0, 195, 255)'
  }
}

export default Footer