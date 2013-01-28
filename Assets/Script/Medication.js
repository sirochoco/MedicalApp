var medicine:GameObject;
var generatePosition:Vector3=medicine.transform.position;

function Start () {
//gameObject.Find("MedicineParticle");
}

function Update () {

}

function OnClick(){
Instantiate(medicine,generatePosition,transform.rotation);

Debug.Log("Click");
}