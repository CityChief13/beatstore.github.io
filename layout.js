let selectedBeat = null;

function showLicensingOptions(beatId) {
  selectedBeat = document.querySelector(`.beat-item[data-beat-id="${beatId}"]`);
  document.getElementById('beat-title').innerText = selectedBeat.dataset.beatName;
  document.getElementById('price-basic').innerText = selectedBeat.dataset.priceBasic;
  document.getElementById('price-standard').innerText = selectedBeat.dataset.priceStandard;
  document.getElementById('price-premium').innerText = selectedBeat.dataset.pricePremium;

  document.getElementById('licensing-modal').style.display = 'block';
}

function closeModal() {
  document.getElementById('licensing-modal').style.display = 'none';
}

function updatePrice(licenseType) {
  const price = selectedBeat.dataset[`price${licenseType.charAt(0).toUpperCase() + licenseType.slice(1)}`];
  document.getElementById('purchase-btn').innerText = `Purchase - $${price}`;
}

function purchaseBeat() {
  const license = document.querySelector('input[name="license"]:checked').value;
  const price = selectedBeat.dataset[`price${license.charAt(0).toUpperCase() + license.slice(1)}`];
  
  // Simulate purchasing logic here
  alert(`You have purchased ${selectedBeat.dataset.beatName} with a ${license} license for $${price}.`);
  closeModal();
}
