def min_time_to_distribute_cookies(T, test_cases):
    results = []
    for i in range(T):
        N, M = test_cases[i]
        R = M % N
        if R == 0:
            results.append(0)
        else:
            results.append(min(R, N - R))
    return results

# Read the number of test cases
T = int(input().strip())

# Read each test case
test_cases = []
for _ in range(T):
    N, M = map(int, input().strip().split())
    test_cases.append((N, M))

# Calculate the results
results = min_time_to_distribute_cookies(T, test_cases)

# Output the results
for result in results:
    print(result)
