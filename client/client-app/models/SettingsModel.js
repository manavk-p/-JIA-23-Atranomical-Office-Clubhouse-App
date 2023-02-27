class SettingsModel {
    constructor(id, name, email, role, noiseLevelPref, temperaturePref, locationPref) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
        this.noiseLevelPref = noiseLevelPref;
        this.temperaturePref = temperaturePref;
        this.locationPref = locationPref;
    }
}
export default SettingsModel;