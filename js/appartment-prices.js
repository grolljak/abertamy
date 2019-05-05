function hideAll(num) {
    document.getElementById('winter-price-'+num).style.display = 'none';
    document.getElementById('summer-price-' + num).style.display = 'none';
    document.getElementById('winter-price-extra-' + num).style.display = 'none';
    document.getElementById('summer-price-extra-' + num).style.display = 'none';
}

function winterSeasonCheck(num) {
    if (!document.getElementById('winter-season-' + num).classList.contains('selected')) {
        hideAll(num);
        document.getElementById('winter-season-' + num).classList.add('selected');
        document.getElementById('summer-season-' + num).classList.remove('selected');
        if (document.getElementById('extra-bed-' + num).classList.contains('selected')) {
            document.getElementById('winter-price-extra-' + num).style.display = 'block';
        } else {
            document.getElementById('winter-price-' + num).style.display = 'block';
        }
    }
}

function summerSeasonCheck(num) {
    if (!document.getElementById('summer-season-' + num).classList.contains('selected')) {
        hideAll(num);
        document.getElementById('summer-season-' + num).classList.add('selected');
        document.getElementById('winter-season-' + num).classList.remove('selected');
        if (document.getElementById('extra-bed-' + num).classList.contains('selected')) {
            document.getElementById('summer-price-extra-' + num).style.display = 'block';
        } else {
            document.getElementById('summer-price-' + num).style.display = 'block';
        }
    }
}

function extraBedCheck(num) {
    hideAll(num);
    if (document.getElementById('extra-bed-' + num).classList.contains('selected')) {
        document.getElementById('extra-bed-' + num).classList.remove('selected');
        if (document.getElementById('winter-season-' + num).classList.contains('selected')) {
            document.getElementById('winter-price-' + num).style.display = 'block';
        } else {
            document.getElementById('summer-price-' + num).style.display = 'block';
        }
    }
    else {
        document.getElementById('extra-bed-' + num).classList.add('selected');
        if (document.getElementById('winter-season-' + num).classList.contains('selected')) {
            document.getElementById('winter-price-extra-' + num).style.display = 'block';
        } else {
            document.getElementById('summer-price-extra-' + num).style.display = 'block';
        }
    }
}