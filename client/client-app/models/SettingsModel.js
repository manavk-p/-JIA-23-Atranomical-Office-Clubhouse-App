class SettingsModel {
    constructor(id, name, email, noiseLevelPref, temperaturePref, locationPref) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.noiseLevelPref = noiseLevelPref;
        this.temperaturePref = temperaturePref;
        this.locationPref = locationPref;
    }
}
export default SettingsModel;