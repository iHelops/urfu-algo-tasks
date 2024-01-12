// https://www.codewars.com/kata/525c65e51bf619685c000059

function cakes(recipe: Record<string, number>, available: Record<string, number>) {
    let count = 0;

    while (true) {
        for (const key of Object.keys(recipe)) {
            if (!available[key]) return count;

            if (recipe[key] > available[key]) {
                console.log(count)
                return count
            }

            available[key] -= recipe[key]
        }

        count++;
    }
}
