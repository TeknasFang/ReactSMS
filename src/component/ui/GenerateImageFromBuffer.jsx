import React from 'react'
import styles from '../student/StudentList.module.css'
const GenerateImageFromBuffer = (props) => {

    const arrayBufferToBase64 = ( buffer ) => {
        var binary = '';
        var bytes = new Uint8Array( buffer );
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode( bytes[ i ] );
        }
        return window.btoa( binary );
      }

    let imageUrl = arrayBufferToBase64(props.buffer)

  return (
    <>
     <img className={styles.studentImage}
              src={`data:image/png;base64,${imageUrl}`}
              alt="noelle"
            />
    </>
  )
}

export default GenerateImageFromBuffer