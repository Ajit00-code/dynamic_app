import { useState } from "react"

export default function ProfileCard(){

    const [userProfile, setUserProfile] = useState({
        firstName: "Ajit",
        lastName: "Bombe"
    })

    return (
        <>
            <div className="ProfileCard">
                <div className="ProfilePhotoContainer">
                    <img src="/src/assets/dummy_profile.jpg"/>
                </div>
                <div className="FavouriteContainer">
                    <div className="IconContainer">

                    </div>
                </div>
                <div className="NameContainer">
                    {userProfile.firstName} {userProfile.lastName}
                </div>
                <div className="PhoneContainer">
                    +91 9730156789
                </div>
                <div className="EmailContainer">
                    abombe11@gmail.com
                </div>

            </div>
        </>
    )
}