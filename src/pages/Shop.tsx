import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, ShoppingCart, Star, Plus, Minus, Filter } from 'lucide-react';
import { mockShopItems } from '@/lib/mockData';
import { ShopItem } from '@/types';

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cart, setCart] = useState<{[key: string]: number}>({});

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'groceries', label: 'Groceries' },
    { value: 'food', label: 'Food & Snacks' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'books', label: 'Books & Stationery' },
  ];

  const filteredItems = mockShopItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const addToCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1
    }));
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0)
    }));
  };

  const getTotalItems = () => {
    return Object.values(cart).reduce((sum, count) => sum + count, 0);
  };

  const getTotalAmount = () => {
    return Object.entries(cart).reduce((sum, [itemId, count]) => {
      const item = mockShopItems.find(item => item.id === itemId);
      return sum + (item?.price || 0) * count;
    }, 0);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Campus Marketplace</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Everything you need as a student - from groceries to electronics, all at student-friendly prices
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {getTotalItems() > 0 && (
              <Button className="relative">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Cart ({getTotalItems()})
                <Badge className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground">
                  Ksh {getTotalAmount().toLocaleString()}
                </Badge>
              </Button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="hover-lift overflow-hidden">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={item.images[0]}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 left-2 bg-primary">
                  {item.category}
                </Badge>
                {item.vendor.badge && (
                  <Badge className="absolute top-2 right-2 bg-success">
                    {item.vendor.badge}
                  </Badge>
                )}
              </div>

              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-lg font-semibold">{item.name}</CardTitle>
                    <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium">{item.rating}</span>
                        <span className="text-xs text-muted-foreground">({item.reviews})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-xl font-bold text-primary">
                    Ksh {item.price.toLocaleString()}
                  </div>
                  <Badge variant={item.inStock ? 'default' : 'secondary'}>
                    {item.inStock ? 'In Stock' : 'Out of Stock'}
                  </Badge>
                </div>

                <div className="text-xs text-muted-foreground mb-3">
                  by {item.vendor.name}
                </div>

                {cart[item.id] > 0 ? (
                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="font-medium">{cart[item.id]}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addToCart(item.id)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                ) : (
                  <Button
                    className="w-full"
                    onClick={() => addToCart(item.id)}
                    disabled={!item.inStock}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found matching your criteria.</p>
          </div>
        )}

        {/* Floating Cart Summary */}
        {getTotalItems() > 0 && (
          <div className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <div>
                <p className="font-medium">{getTotalItems()} items</p>
                <p className="text-sm">Ksh {getTotalAmount().toLocaleString()}</p>
              </div>
              <Button variant="secondary" size="sm">
                Checkout
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;