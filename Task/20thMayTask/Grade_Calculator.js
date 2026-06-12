// Problem: Take marks (0–100) and print the grade based on these rules:

// - 90 and above → A

// - 80–89 → B

// - 70–79 → C

// - 60–69 → D

// - Below 60 → Fail

let marks = 85;

if ( marks >= 90 ) {
    console.log( "Grade: A" );
}
else if ( marks >= 80 ) {
    console.log( "Grade: B" );
}
else if ( marks >= 70 ) {
    console.log( "Grade: C" );
}
else if ( marks >= 60 ) {
    console.log( "Grade: D" );
}
else {
    console.log( "Grade: Fail" );
}