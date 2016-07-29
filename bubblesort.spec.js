describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect(bubbleSort([]) ).toEqual( [] );
  });

  it('leaves sorted array alone', function(){
    expect(bubbleSort([1, 2, 3])).toEqual([1,2,3]);
  });

  it('sorts unsorted array', function(){
    var giantArray = [4, 2, 5, 6, 2, 1, 3,8,122,5,64,3]
    expect(bubbleSort(giantArray)).toEqual(giantArray.sort());
  })
});
