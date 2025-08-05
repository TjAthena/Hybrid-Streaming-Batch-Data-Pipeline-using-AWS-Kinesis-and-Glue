document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll("li");
    const detailsBox = document.querySelector(".details-sric");

    listItems.forEach(item => {
        item.addEventListener("click", () => {
            // Move the details box below the clicked item
            const parent = item.parentNode;
            parent.insertBefore(detailsBox, item.nextSibling);

            // Update the content dynamically
            updateDetails(item.textContent);

            // Show the details box
            detailsBox.style.display = "block";
        });
    });
});

// Function to update the details content dynamically
function updateDetails(title) {
    const detailsContent = document.querySelector(".details-content-sric");

    // Define image sources for different rice items (you can replace these with real images)
    const imageMap = {
        "IR64 Parboiled Rice": "img/rice_types/IR64.jpg",
        "IR36 Parboiled Rice": "img/rice_types/IR36.jpg",
        "1121 Sella Cream Basmati Rice": "img/rice_types/1121 Sella Cream Basmati Rice.webp",
        "1121 Golden Basmati Rice": "img/rice_types/1121-golden-sella-basmati-rice.jpg",
        "1121 Sella Cream (Second Wind) Basmati Rice": "img/rice_types/1121 Sella Cream Basmati Rice.webp",
        "1509 Sella Cream Basmati Rice": "img/rice_types/1509-basmati-rice.jpeg",
        "1509 Golden Basmati Rice": "img/rice_types/1509-golden-sella-basmati-rice.webp",
        "PR.11 Sella Cream": "img/rice_types/pr-11-creamy-sella-parboiled-rice.webp",
        "Sugandha Creamy": "img/rice_types/sugandha-basmati-creamy-rice.webp",
        "Sugandha Golden": "img/rice_types/golden-sella-rice.jpg",
        "Kolam Rice (Premium Quality)": "img/rice_types/Kolam.webp",
        "HMT Sona Masuri Stream Rice": "img/rice_types/hmt-new-steam-rice.png",
        "BPT Sona Masuri Stream Rice": "img/rice_types/bpt-sonamasuri-new-steam-rice.png",
        // Add more rice types and their respective image URLs here
    };

    // Define specifications for different rice items (replace with actual values as needed)
    const specsMap = {
        "IR64 Parboiled Rice": {
            origin: "India",
            riceLength: "5.8mm - 6.2mm",
            broken: "5%",
            foreignMatter: "0%",
            moisture: "12% - 14%",
            riceColor: "Lemon Color / Yellow",
            chalky: "NIL",
            redAndBlackKernels: "1%",
            paddyKernel: "0%",
            bagSize: "50 kg",
            packingModel: "Jute, PP, BOPP Bags or Buyer'c Choice"
        },
        "IR36 Parboiled Rice": {
            origin: "India",
            riceLength: "5.8mm - 6.2mm",
            broken: "5%",
            foreignMatter: "0%",
            moisture: "12% - 14%",
            riceColor: "Lemon Color / Yellow",
            chalky: "NIL",
            redAndBlackKernels: "1%",
            paddyKernel: "0%",
            bagSize: "50 kg",
            packingModel: "Jute, PP, BOPP Bags or Buyer'c Choice"
        },
        "1121 Sella Cream Basmati Rice": {
            origin: "India",
            riceLength: "8.35mm",
            broken: "1%",
            foreignMatter: "0.2%",
            moisture: "12% - 14%",
            riceColor: "White",
            chalky: "NIL",
            redAndBlackKernels: "1%",
            paddyKernel: "0%",
            bagSize: "50 kg",
            packingModel: "Jute, PP, BOPP Bags or Buyer'c Choice"
        },
        "1121 Golden Basmati Rice": {
            origin: "India",
            riceLength: "8.3mm -8.5mm",
            broken: "5%",
            foreignMatter: "0%",
            moisture: "12% - 14%",
            riceColor: "Golden",
            chalky: "NIL",
            redAndBlackKernels: "1%",
            paddyKernel: "0%",
            bagSize: "25Kg, 40Kg, 50 kg",
            packingModel: "Jute, PP, BOPP Bags or Buyer'c Choice"
        },
        "1121 Sella Cream (Second Wind) Basmati Rice": {
            origin: "India",
            riceLength: "8.3mm - 9mm",
            broken: "5%",
            foreignMatter: "0%",
            moisture: "12% - 14%",
            riceColor: "White",
            chalky: "NIL",
            redAndBlackKernels: "1%",
            paddyKernel: "0%",
            bagSize: "25Kg, 40Kg, 50 kg",
            packingModel: "Jute, PP, BOPP Bags or Buyer'c Choice"
        },
        "1509 Sella Cream Basmati Rice": {
            origin: "India",
            riceLength: "8.3mm - 9mm",
            broken: "5%",
            foreignMatter: "0%",
            moisture: "12% - 14%",
            riceColor: "White",
            chalky: "NIL",
            redAndBlackKernels: "1%",
            paddyKernel: "0%",
            bagSize: "25Kg, 40Kg, 50 kg",
            packingModel: "Jute, PP, BOPP Bags or Buyer'c Choice"
        },
        "1509 Golden Basmati Rice": {
            origin: "India",
            riceLength: "8.3mm - 9.0mm",
            broken: "5%",
            foreignMatter: "0%",
            moisture: "12% - 14%",
            riceColor: "White",
            chalky: "NIL",
            redAndBlackKernels: "1%",
            paddyKernel: "0%",
            bagSize: "25Kg, 40Kg, 50 kg",
            packingModel: "Jute, PP, BOPP Bags or Buyer'c Choice"
        },
        "PR.11 Sella Cream": {
            origin: "India",
            riceLength: "8.3mm - 9.0mm",
            broken: "5%",
            foreignMatter: "0%",
            moisture: "12% - 14%",
            riceColor: "White",
            chalky: "NIL",
            redAndBlackKernels: "1%",
            paddyKernel: "0%",
            bagSize: "50 kg",
            packingModel: "Jute, PP, BOPP Bags or Buyer'c Choice"
        },
        "Sugandha Creamy": {
            origin: "India",
            riceLength: "5.8mm - 6.2mm",
            broken: "5%",
            foreignMatter: "0%",
            moisture: "12% - 14%",
            riceColor: "White",
            chalky: "NIL",
            redAndBlackKernels: "1%",
            paddyKernel: "0%",
            bagSize: "50 kg",
            packingModel: "Jute, PP, BOPP Bags or Buyer'c Choice"
        },
        "Sugandha Golden": {
            origin: "India",
            riceLength: "8.3mm - 9.0mm",
            broken: "5%",
            foreignMatter: "0%",
            moisture: "12% - 14%",
            riceColor: "Lemon Color / Yellow",
            chalky: "NIL",
            redAndBlackKernels: "1%",
            paddyKernel: "0%",
            bagSize: "50 kg",
            packingModel: "Jute, PP, BOPP Bags or Buyer'c Choice"
        },
        "Kolam Rice (Premium Quality)": {
            origin: "India",
            riceLength: "5.0mm",
            broken: "5%",
            foreignMatter: "0%",
            moisture: "12% - 14%",
            riceColor: "White",
            chalky: "NIL",
            redAndBlackKernels: "1%",
            paddyKernel: "0%",
            bagSize: "25Kg and 50 kg",
            packingModel: "Jute, PP, BOPP Bags or Buyer'c Choice"
        },
        "HMT Sona Masuri Stream Rice": {
            origin: "India",
            riceLength: "5.0mm",
            broken: "5%",
            foreignMatter: "0%",
            moisture: "12% - 14%",
            riceColor: "Lemon Color / Yellow",
            chalky: "NIL",
            redAndBlackKernels: "1%",
            paddyKernel: "0%",
            bagSize: "25Kg and 50 kg",
            packingModel: "Jute, PP, BOPP Bags or Buyer'c Choice"
        },
        "BPT Sona Masuri Stream Rice": {
            origin: "India",
            riceLength: "5.0mm",
            broken: "5%",
            foreignMatter: "0%",
            moisture: "12% - 14%",
            riceColor: "White",
            chalky: "NIL",
            redAndBlackKernels: "1%",
            paddyKernel: "0%",
            bagSize: "25Kg and 50 kg",
            packingModel: "Jute, PP, BOPP Bags or Buyer'c Choice"
        },
        // Add more rice specifications here
    };

    // Get the image URL and specs for the selected rice item, or use default values
    const imageUrl = imageMap[title] || "https://via.placeholder.com/100"; // Default image if not found
    const specs = specsMap[title] || {}; // Default to empty if not found

    detailsContent.innerHTML = `
        <img src="${imageUrl}" alt="Rice Image">
        <table>
            <thead>
                <tr>
                    <th>Specification</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Origin</td>
                    <td>${specs.origin || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Rice Length</td>
                    <td>${specs.riceLength || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Broken</td>
                    <td>${specs.broken || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Foreign Matter</td>
                    <td>${specs.foreignMatter || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Moisture</td>
                    <td>${specs.moisture || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Rice Color</td>
                    <td>${specs.riceColor || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Chalky</td>
                    <td>${specs.chalky || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Red and Black Kernels</td>
                    <td>${specs.redAndBlackKernels || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Paddy Kernel</td>
                    <td>${specs.paddyKernel || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Bag Size</td>
                    <td>${specs.bagSize || 'N/A'}</td>
                </tr>
                <tr>
                    <td>Packing Model</td>
                    <td>${specs.packingModel || 'N/A'}</td>
                </tr>
            </tbody>
        </table>
    `;
}
