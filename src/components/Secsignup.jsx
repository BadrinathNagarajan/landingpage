import React from 'react'

function Secsignup() {
  return (
    <>
    <div className = 'img' style={{ 
      backgroundImage: `url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAxgMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAADBAACBQEG/8QAOhAAAgIBAwEFBQYGAgEFAAAAAQIDEQAEEiExEyJBUWEFMnGBkRQjQqGx0VJiweHw8TNyJBU0U2OD/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACkRAAIBAwUAAQMEAwAAAAAAAAABAgMREhMhMUFRBBRCYSJSocEFMuH/2gAMAwEAAhEDEQA/ANrV6SIbBGsgbqdtEfEDAhNSi/dzK6XxfGGWY8b4RfgeuXadDYChWI8c7E5Lk+clGnLdbfwLvJqFAEsB4N2h6Z37Qr3e5T4gjGXVWXeGJbxCjBowqgOR1G7Hku0S6UrbSF31DJzGWNfxHKj2iwNyJeaI0zdmW7EkDnwOCbQxsu4oyg+NZSqU+0ZOh8hbxZSD2lFvF0L+uOR6xipEcjFT+FjxiTaGEd1rLeQ61lTAsBBVm2H8smUacuBwrfJg/wBSNSD2hNFQCvtuu7yB/nwxka2Nzuu/PdmVEXU+9VeIF1l2amJ4sDni8xdNdHbD5TtuOTlpGAXURqp/nAODbRRM69vqm7PwQHlvn4YFZIzFtfhR02nkH4YbtoGRSS7MOhd+ny4xabRp9RFl5TLHDtjjECEc2Rz88X06ANTy2vU1Vf56DKPMoX7qMEjxIFnIqyAgyOwJPO0gD68nHiQ6zfAbU6xjGURnRVqttKD8cGmqaPusqjcLPjf14wzrBs4nsnwjW/reI9k7s1leOLY8YWQKb7NTbuhhlWiS3epuFHhdZyTUB7uEswHV6r69fpgonjWFAsW5jwyr+Hr0w6iSMCSECSPqQ3DL6XkNGymmZrauZD2aK7IT3wy9TjX24waXY7jvrtAs7lHkeuX1GpDpy6hgejgcflgkigeQX94rit4PX9sB5eBNLr9Lp1JOnbtB0kbkj4V0zscrTxtLIGaOjtXdzz4+mF0umhWGQxr94hO1g52sBl9ZrdLqSjwAo6ptcbAB/l+mFlceTsKP9i0kCyMPvm5Kn8q8hik2pXVxiOcbiPcNWR6D0w/Ei75IoGrgFySR8suNRFpku4t3kEoD6VfzvKSfJDnFCsEM6oFj3V5dmT+mTK6j20rMN8t+lmh8hQyZapt9Gf1dNdio0uqjJEbbq6jrhlacV2+nWyOjcflhg8i7jFIL8VK85SbUOyr29hV6VzWaqTkcTpKG6bSOGLfyi9kf5W65DBqQoIkSQAdKsj6ZEnS1csdt9cKkwY3FMDfhf74m5LlCjGm91IGGloLsjf03G8usktbWiFD1PGGZIjym6zybPN4RIgUBLsSTyeMzcvwdUKbfEganaFqFjXIpgawc2pi2N22ndPIkGgfpjkKQtGwcsG8/DJNpl2912U154lOI50qnTMwauB3syBTxlxt7RSrhhXTGW9mWCQFkXrajnEptAjAqAR5Hn/Wa3ps43H5EOVcdUwMCXVTx1Y52IRgFbQsfdocZmp7Jk3++WAHI31hT7MKgEGRCeRT3eDjH9wKpWtd0zVkaLsx2UUl8biFsX41gyIe1Vo+0jG3vKyAAnz65lGDWREdlMOfAt1/LIi+0txYxI1cWHr9MnSXTKXy3w4Dxa5mMZ7IV7t0P7ZfsXCchlY1bBxyMTX7a1k9mNvqTWWj7c8llHwjrDCxTrZfaxhgPxLfp/bKSOkahlKgqeRWXeNiAC5HHlWLNp1s8s7deowt6S5Nbo7JrdK1CSkb+UUTl4/acCRLF2m6NTwFj5+uDTsl5m05ZfJsrI+ldyVKhfBSnTKxiQqtVfcjsvtOGiF3sCb2haH0wP2qeTuw6Xr0LcYwjaNVBoX6ggHOyTwL2fZTRofxLjWK4Q8py/wBpivY+0JmppAh/l6/DI3sllBbVmTr0PF/K8Zj1MUMwkinckeWSfXtqye2lsddrGgMWUvClCj27gofZsWy1gUj1YD9cmHh1EHZDhVP8O/jOYrzLtRXCQMTBT7zOB0BzjTKWG1hXk/TOLHFyUkdaPAHOWJ422sw6/wAOVaNzPOS5DQwRuAVVVoWWQ/tnNTDD1G1r8xzigKrINqzJfXYay+5kBp7v/wCRcpxZlqw7QTsxFfYyOOB3TTA5155NOedv/YE85Rp0Ww8am/xJzXyy8Uujtbu//sHGS16ilJcRlYg9qlG/49t9WTkH6jDJ7UYg3KK8toOVmk0slLuisePAJxSbRQyDcqp8VJ/pgowfKCVavDiSZoxa5WNqyqfQ9f0w4l3d6h9c8/2UkVX3l9eKw0cpjJCqW/6teEvjroUP8lNbTRrBgSzEDavA2EkA/wBfhgJNXtcdnC/HRd1gYmNa8atSGiPxGsqupYx8dkq+IHJxKjYcvm5cP+BztXlBuMoTzyOB8MWaOcV/5JJa+6Bl0nkCDZL8AVsZSTWz8FlhYijwTeUk1wZOcXvJs5t1cdhmV1vjqPnlPtpVqaIX59sRjOm1G5bdSPQj98J9224vC5HkqY7pconTbV4S2/IuqiYX2uz+USk3kCxQMpfe988ScjOvpNJIQTppY/Xzyp0I3XpmnIHi9V+mDxBRlHq4yroKbsgBXvbrP1yHVRF1YlVrgqxsNgEh1A3Kyoa5sEZc2FJSBHrxsDIsjVTmlf8AoLL7Q0rGl2GvwqLxaTVQPYfS9p5fd9MEdbIj8rBGb6XZyS6mduSbJ/hNAZShYUvkXX/ATzafqYAp87AP0xeTUQsRtU3fNHCrJsBBZDfWhd4Q6iJlC9mw/iIH75pZeGDcubix1EF/8EhyYy0mnv7uEV/O4vOY9vCd/RxBbMQynzPQ5eox1kBPkQMQU2KTaQOg6H8sKskgHR19AbGTgzfXXaGWjA52IfSqzioFUjs7J8Qaxb7RzyVv1GcOpNdxAflgqciHXpoI0c10jsp8t2RWlF71Lmq6jAHUFve4PpzkJB5o36rl2fDMdSHMS7SI3ddUH8rL/XJH9n3UbHoHIGcWylFWo+JPGc7JSeg+hwsicpch2MEXO2MA+IaznU1ENd1m+FYEbL96/wD9CMtsX8UzAeHfvFiitWfSRczMzfdrKoHkwy0cyxuO2lZCfE1xggICbJs14n++dKxcEkN8fD88GkCqS5Ho5gX+6kjIHjXP65fkjeyrt8WIusy5mDAKQK8KN4LsIL7s9fBqyNJM2Xynfg1m7N27SMBQBW0GzneyJUFZXVvO+mZBQKfvNU1ejDAjsQTuk3fEc/pgqL9FL5a/aa8k862GaOT+YvRPywUk8hralee1xzmcs0aKQqtfgQBkE6X3i1+rVl6Zl9S/R9p9THwqoAR1djg2aVlO6WAgc12hxYSR7tzU3kAbrCGVivcAAI5s4YW6BVr8sgVTZ2RN6DnOlnbgpCq+dC/0xUt3/wDk2/C8vvBFMS3w/vjcWQppBgsC+8zE/wAqkZ29JzaHp+PEnG494H4cftnACPdjX548B6yXQ+W0KqKRCT5LkxUGUjx+mTHiGp+AYkA5BzvajxvFbyWfDN7HNZ+jJkHW86stdDQxQk+Ocs4WDEd7XybOicjjfiNnJZxWDF+jp1BF9451dVXUX8MQJPnkSya5+WKyKUX6PtMr81WV3J54qeaHI69cg90nDYbov0a3r58ZYyrXNk/HExZrrz55B7oOINJjvbKwr+uU3rYoDFedxHlzkBtR8P3wBUmOSMFXhjlRKteGLF2IG42K88q1+fQ4DdK/A0ZUPhnBIv8ACMWc7cHvOBLptDqyKD/TLNMvy+JxDccm8+eFgwY6sqj3eM6Zz/GcR3nOFsLBgPGb1P1znbH/AA4luzpfHYMBwSjxYjJiW8+GTFiVYc7P0zvYnyzR+zsh70X6ZwQlroA11rJ1UVoTM/sj5ZzsD5ZorAD02fPCrECBang9Rxj1ETozMgQnyydj6ZoSRsGKgcjnn986kTEEEAjreLUQtKZm9j6ZBAfDNJYLJqxQvkZxI7barBifA8YZoNOZnmIgA8m8ghboBmm2nplDJZboBwBkOnKkBV488WaDGoZnZP55OxI9fDNIwrdkH4eOdbTKUHZsOfOhhmgxqGW0bDzyuw9PHNL7PZNEBvK84dM3HuX1PXDNDxmZ+xvXOdmfK80zpgv4gQfXKfZ+Dtqh08bwzQrTM4oaFDOdlfhzmoNP3SSKYVakc5waezVV6480L9fhl9j6ZOyrNP7MoamPzGcOn86XzvDNBafhmdn6ZOy9M0/svPUUPHKPBzfFHy5x5Idp+Gf2Z8snZ4+YWUA8bT0ypi+F+Q5wyQWmImPJjnZjxrJjyQ7SNuJD0vpwNwH65ddLMJCzQkqT7x6ZaGc8JAhR/MWcrP8AaHb/AJXdj4c3nBke3pI44XtAtgcdKsn55TZvpZSI0B4oWfpkQTxsAshjY9d6+GMM4VF7AwtLfeAXn9MMg0gTQRiPmivqmUVDISyoFI/DROH7STbQjaVuvQf05wsWnklG6TSug8WJIH6Ysw0RURSBeoNdTu/UHLrp45OSwRq6X4/XOyxrGxHaLR5BIsH++S5NOplLAF+AL5+dYZi0QIjjL7+02gGvL9csga/uSstdaBvLK7MwRJI1XxZgT4dMLGwgPdaN6NMCtefiBzhmLRQuHO9qZVYckbh/XCiBpELBCGuwQAR8SctqNKyKWjm3buhDfkRWEk+2Qx8yBUHVB4D6YZhoC7RuFEndpeoI5I8co21GXeQytyKUA1/npjxC6hFdIoQ1D3xZb1xeTTrGwka7BogtQwUwfx0DkUbAxeVVvhWF/wBsvFDE5Gyma6K1RJ+WX7DSgdorqGvkXwP3wkUcC7V2LvPAbgc/X+mGbFoIV1OllBYABiPUYskbI5JDUoskKGqvTNLsZ2nsPGqjjuHmh6XnNQhBBVGejRJj5/XDINGwl2rPtOxdwFgFRf0yispCGUFNxphXNennmgmmqpn0u+x1L/vhFUz0SmyJehI6D0HTDINMxQoll7i7BfTkYUggGOXcDZs2Bfxxx4lTU7oXUuvTaAD8xnZtGZICZY5Yy3WTg7vgTjyDTRjve4j3lTkUCQcJArsO9GzeADGvzx4aIxqJEkWWPdZS6b48YGYxbWV4mLbujNzjyFpIp2EkRPaKyg9AwByYZVZh9yu1fK7/ADIyY8l6TpGhqo34M7Ohroh64ijO7iHljfHFmsej9lHb2skis/hcmKzq8UxG4fGM3X0znT6PUcDiTjTyPSqrg9dv7YyuvIJMcUQFXvUH8uecThhRmAQb1B3EOwF40scemttU1I3AiiJJx3JUQiSM57cTagFuoB/TJ/6lbHYZ128V1v5YPSaoJMNmnkMJ463d/lhtZPpbMSaR4j4yFRx+fOSViU1GvQgrIpQFOV2g0fU4Npo56eTUSxbRtXv8n8umSDSwayLs90hl3e8TYA9QMqI/s0hj2s19V7M2f647iwLPowsQkDSNz3isgYgetYXTqsoUlJSB0arA/fOHVR6dVikWUyE243bQvp/vCarUS7kWKSTs5FFVR6eg8cVwwQWTU6QWjKFPQ8ZRn0e0KiMu0imKcZVYIooPtDHeTZII2/XreW0TnUTlHaBlYcbrNfD/AFiuVgKfaiAT2Vc8MPL4kZYSJqJF3KgYUCT3ifUnHnj02iDRT6R5geSwYcD+mIH7PtK/Z5VS7Wms/D/DjyE4WO6yNtJIqACQMPd2XxlI1jIKMkcUn86N19M0YIPtWl4j/wCNe5vJF84lFBHLNXKSjmrJ+WGQnTLjTPG26RQ9c7rG388KNYzsWERjuipD90/nlu3kmCxSxMtfiPGUk0OmeRUlkIc3TCgKwuNwC6ftu1kaVYX3iu4OfjYxJj2WoZiGlY37jbcY07CJGXTJSEkKzEk/2wJjLbmJbsk7xJN3jTIcALyFn7OVGAquQR/vDQwqy9zVMnHFMCR8ctqJI5ogNKx63QAPh4XziSQOZSyMb6HelfpeMMEG1EUllpG7dPFlAtcHEwdXSUXGnQNR/wBY1pPZ+pinLRKWUDna/BBzvtD2dqUcvErtY93iwP64KQnTJo59EikEBG8rIH65My9RNOjhV06xsBR7v+8mOzGoqw5C53Bmh7OiDulYBj8s0BpYdbL95MkdHotsSPhmX2BgYSahdvFjcK+gyNrZ2f7iQJGT5gHI2Zvaxs6jR6TSbfvjbe7Yof3xOaSMyqJJXc+JVQQD+2XGk9oazT9qIXZQL68kf55YFJZtHCVdF7Q9N1d3Iui3H8BZ3EjBr1BcChwFX8ji0QUyGaXs6Xr3bP8AfNDR6M6pBLqZ1iF0F8T8sdXRR6WIm1F/iJ7wHwwvYFG5hyGaFmfTzFldaUi14/6jGfZ7u8dTibd5luT8uuNSSO7Xp9MKBpTdG8tHFJtkLV2zdFjbk/PFkGAhLD9+D9lbYQf+Ynv+XHGDdJWYu2iZIuhCkn/eP75dPCTqGFEGgRya6DA6ufWzaRewU7hz6gfDC48RxNLqyilCqhlF0gHGLyR6tdZt00CRI9AugxHRnVybxNrdtD3b3f6zRTUOmmCNI7tRBs8YwSE/aAVG2vNcjMdxLdcLEfsaAadY5ZCA6uZKoeIF4LSadZ900iAOOljgj4nAalZxqpDIsr7fxBa/tgmJrsPDO41IdZoo3PFXRv1zT1Q+0qIQP/JA5YKB+d/nmTo44IEaYiUuVoKOq355bRzNPqf/AGkhJ+PGDBIf0f3cZhjFvZtpACAa6XiEykvJLIw7VTwiHb8x54z7QD6iJUiUllG47R0xDSmeKYLqImZQbur+YwQNBoNadxKRyM6i6ViSf1y0OujLM0iHe3Vm90fIVies9na3T7X3LLG/KmNvDBRqqRfedzyJX3vTLumRZjftGKBFQqN5I70kElj5jzwSRpqEURPKHHA7WlUj5+OSD2jJp1IQHviroG/yxrRGLUsN8RjnBLIVYDf6UeLwDErpZH04ME0skRJtdwoA+t+GHnj1kEf38h7KXlHjawD6ZWf2dqp5TJptQpjAHdc7TfkRhtLMsOmbSe1o+4ptGj4K/PFlvsGHonAs2qBaTUE7eBvVryYPViFpK0U8rIP4pNpyZdvf6It4c2LqI0abvs3JJx0xQ6TTl4oU3DxayTkyZCWxuZ+s9ua4syCQKle6ooYPT6+ZnHuDuk+7eTJlSWxF9zQ0rtOn2iRiZOg8h8M0L7XRK78sGr45MmRIuHBPZshdZSaBRQRXnlEndtWqGqrOZMlclvgtOoeZS3PAOJ6yRu6oNLI3eAyZMkaFdLGo1Bj/AA0T9MbmiVtKGJYk0euTJg27oVthjRQrGd6lu7dC+OmM+1QFWOlHfUs3HU8/tnMmHbF9qMp9Q0EMbRIi7173dzR9m6h20Emp47WMgCuh+OTJlPgXZbWTFI3mCrvSq445rEdfqGkO4pGp7p7q5MmJcDlyKTauV4lisBI72geGF047eORn6pHfH4uvX6ZMmU+Bdh9NBH9jlkC1XIUHjBSRCJhIpaxzR6ZMmHYPgtqtXJHp1PdYhRyw5OK6fWzTypp5iHjf+LmvhkyZpHgy+4L7R9maeDRaaePcGlvcL4yZMmTF7Dlyf//Z")` 
    }}>
        <header className="masthead">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center text-white">
                            
                            <h1 className="mb-5">Ready to get started? Sign up now!</h1>
                            
                            <form className="form-subscribe" id="contactForm" data-sb-form-api-token="API_TOKEN">
                                 {/* Email address input */}
                                <div className="row">
                                    <div className="col">
                                        <input className="form-control form-control-lg" id="emailAddress" type="email" placeholder="Email Address" data-sb-validations="required,email" data-sb-can-submit="no"/>
                                        <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:required">Email Address is required.</div>
                                        <div className="invalid-feedback text-white" data-sb-feedback="emailAddress:email">Email Address Email is not valid.</div>
                                    </div>
                                    <div className="col-auto"><button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                                </div>
                                {/* <!-- Submit success message-->
                                <!---->
                                <!-- This is what your users will see when the form-->
                                <!-- has successfully submitted--> */}
                                <div className="d-none" id="submitSuccessMessage">
                                    <div className="text-center mb-3">
                                        <div className="fw-bolder">Form submission successful!</div>
                                        <p>To activate this form, sign up at</p>
                                        <a className="text-white" href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                    </div>
                                </div>
                                {/* <!-- Submit error message-->
                                <!---->
                                <!-- This is what your users will see when there is-->
                                <!-- an error submitting the form--> */}
                                <div className="d-none" id="submitErrorMessage">
                                    <div className="text-center text-danger mb-3">Error sending message!</div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
       
        </>
  )
}

export default Secsignup